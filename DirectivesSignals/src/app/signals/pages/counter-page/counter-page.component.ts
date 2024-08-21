import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  counter: WritableSignal<number> = signal(0);
  squareCounter = computed(() => (this.counter() ** 2))
  increment(): void {
    this.counter.update(value => value + 1);
  }

  decrement(): void {
    this.counter.update(value => value - 1);
  }

  reset(): void {
    this.counter.set(0)
  }
}
