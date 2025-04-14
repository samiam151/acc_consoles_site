<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RaceSubmission extends Model
{
    protected $fillable = [];

    public function race(): HasOne {
        return $this->hasOne(Race::class, 'race_id');
    }

    public function user(): HasOne {
        return $this->hasOne(User::class, 'user_id');
    }

    public function car(): HasOne {
        return $this->hasOne(Car::class, 'car_id');
    }
}
