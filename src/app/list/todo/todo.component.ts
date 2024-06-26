import { Component, Input } from '@angular/core';

import { Todo } from '../../shared/models/todo.model';

import { TodoStore } from '../../shared/services/todo.store';
import { DoNothingDirective } from '../../shared/directives/do-nothing.directive';
import { CommonModule, NgIf } from '@angular/common';

/**
 * The todo component
 * ```html
 * <todo>
 *    [todo]="todo"
 * </todo>
 * ```
 * <example-url>../screenshots/todo/todo.png</example-url>
 */
@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    standalone: true,
    imports: [DoNothingDirective, NgIf],
})
export default class TodoComponent {
    /**
     * The entry todo from the parent list
     */
    @Input({
        required: true,
        alias: 'todo',
    })
    todo: Todo = new Todo('');

    /**
     * Local reference of TodoStore
     */
    todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    remove(todo: Todo) {
        this.todoStore.remove(todo);
    }

    toggleCompletion(todo: Todo) {
        this.todoStore.toggleCompletion(todo);
    }

    editTodo(todo: Todo) {
        todo.editing = true;
    }

    stopEditing(todo: Todo, editedTitle: string) {
        todo.title = editedTitle;
        todo.editing = false;
    }

    cancelEditingTodo(todo: Todo) {
        todo.editing = false;
    }

    updateEditingTodo(todo: Todo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo);
        }

        todo.title = editedTitle;

        this.todoStore.update();
    }
}
