<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        $users = User::all();

        return Inertia::render('admin/users', [
            'users' => $users
        ]);
    })->name('admin.home');
});
