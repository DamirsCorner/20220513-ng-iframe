import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent {
  @ViewChild('iframe') iframeElement?: ElementRef<HTMLIFrameElement>;

  constructor(private router: Router) {}

  public onLoaded(): void {
    try {
      const frameLocation =
        this.iframeElement?.nativeElement?.contentWindow?.location?.href;

      if (frameLocation) {
        this.router.navigate(['/thank-you']);
      }
    } catch {
      // catch cross-origin error when trying to read iframe location
    }
  }
}
