import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureSetsModule } from '@nx-apollo-angular-lego/feature-sets';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    FeatureSetsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
