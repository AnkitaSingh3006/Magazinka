import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatTreeModule } from '@angular/material/tree';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClothingComponent } from './clothing/clothing.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { MoreComponent } from './more/more.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NewComponent } from './new/new.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FilterPipe } from './filter.pipe';
import { CollapsableFilterPipe } from './collapsable-filter.pipe';
import { CartComponent } from './cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'new', component: NewComponent },
  { path: 'clothing', component: ClothingComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'more', component: MoreComponent },
  { path: 'cart', component: CartComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    BottomSheetComponent,
    FooterComponent,
    ClothingComponent,
    ShoesComponent,
    AccessoriesComponent,
    MoreComponent,
    NewComponent,
    CartComponent,
    FilterPipe,
    CollapsableFilterPipe,
    DialogComponent,
  ],
  entryComponents: [
    BottomSheetComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatTreeModule,
    MatGridListModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
