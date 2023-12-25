import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './posts/post/post.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    { path: '', redirectTo: '/0', pathMatch: 'full' },
    { path: ':id', component: PostComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        HttpClientModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}