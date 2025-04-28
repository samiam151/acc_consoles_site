<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\RaceController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/users', [AdminController::class, "users"])->name('admin.users');
        Route::put('/users', [AdminController::class, "update"])->name('admin.user.update');

        Route::get('/users/{user}', [AdminController::class, "detail"])->name('admin.users.detail');

        Route::get("/races", [RaceController::class, "show"])->name('show.races');
        Route::get("/races/create", [RaceController::class, "create"])->name('create.races');
        Route::get("/races/{race}", [RaceController::class, "edit"])->name('edit.races');

        Route::post("/races/destroy/{race}", [RaceController::class, "destroy"])->name('destroy.races');
        Route::post('/races', [RaceController::class, "store"])->name('store.races');
    });
});
