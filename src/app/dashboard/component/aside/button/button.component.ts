import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { AsideService } from '../aside.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  asideService = inject(AsideService);

}
