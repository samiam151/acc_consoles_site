<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function users(): Response {
        $users = User::with('role')->get();
        return Inertia::render('admin/users', [
            'users' => $users
        ]);
    }

    public function detail(User $user): Response {
        return Inertia::render('admin/user', [
            'user' => User::with('role')->find($user->id),
        ]);
    }
}
