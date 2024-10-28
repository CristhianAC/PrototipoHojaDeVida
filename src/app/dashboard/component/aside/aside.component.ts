import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsideService } from './aside.service';
import { ButtonComponent } from './button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideComponent {
  toggleService = inject(AsideService);

}
