// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form functionality
import { AppComponent } from './app.component'; // Import AppComponent (assuming you have created it)

@NgModule({
  declarations: [
    AppComponent // Declare AppComponent here
    // Add other components, directives, or pipes as needed
  ],
  imports: [
    BrowserModule,
    FormsModule // Import FormsModule here for form functionality
    // Add other modules as needed (e.g., HttpClientModule for HTTP requests)
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap AppComponent as the root component
})
export class AppModule { }
