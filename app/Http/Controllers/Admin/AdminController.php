<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\AdminUserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Client\Request;
use Illuminate\Http\RedirectResponse;
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

    public function update(): RedirectResponse
    {
       $data = $_REQUEST;
       $user = User::with('role')->find($data['id'])->fill($data);

       $user->save();

        if ($user->role->role_id !== $data['role_id']) {
            $user->detachRole($user->role->role_id);
            $user->attachRole($data['role_id']);
        }
        return to_route('admin.users.detail', $user);
    }
}
