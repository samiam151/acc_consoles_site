<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\Admin;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/users', [AdminController::class, "users"])->name('admin.users');
        Route::get('/users/{user}', [AdminController::class, "detail"])->name('admin.users.detail');
    });
});
