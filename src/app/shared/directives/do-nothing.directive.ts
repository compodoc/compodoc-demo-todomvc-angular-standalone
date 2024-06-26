import { Directive, HostBinding, HostListener } from '@angular/core';
import { BorderDirective } from './border.directive';

/**
 * This directive does nothing !
 */
@Directive({
    selector: '[donothing]',
    standalone: true,
    hostDirectives: [BorderDirective],
})
export class DoNothingDirective {
    protected popover: string = '';

    /**
     * constructor description
     */
    constructor() {
        console.log('Do nothing directive');
    }

    /**
     * HostBinding description
     */
    @HostBinding('style.color') color: string = '';

    /**
     * HostListener description 1
     */
    @HostListener('mouseup', ['$event.clientX', '$event.clientY'])
    onMouseup(mouseX: number, mouseY: number): void {}
    /**
     * HostListener description 2
     */
    @HostListener('mousedown', ['$event.clientX', '$event.clientY'])
    onMousedown(mouseX: number, mouseY: number): void {}
    /**
     * HostListener description 3
     */
    @HostListener('focus', ['$event'])
    @HostListener('click', ['$event'])
    onClick(e: Event): void {}
}
