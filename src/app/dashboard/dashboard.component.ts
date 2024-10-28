import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsideComponent } from './component/aside/aside.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ AsideComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
