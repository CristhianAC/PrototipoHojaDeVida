import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AsideService } from './aside.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  toggleService = inject(AsideService);
}
