<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model {
    protected $table = 'roles';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'level',
    ];

    public function user() {
        return $this->hasMany(RoleUser::class , 'role_id');
    }
}
