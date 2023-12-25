import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './posts/post/post.component';

export const routes: Routes = [
    { path: '', redirectTo: '/1', pathMatch: 'full' },
    { path: ':id', component: PostComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}