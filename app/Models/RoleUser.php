<?php

namespace App\Models;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class RoleUser extends Model {
    protected $table = 'role_user';

    public function user() {
        return $this->hasOne(User::class);
    }

    public function role() {
        return $this->hasOne(Role::class);
    }
}
