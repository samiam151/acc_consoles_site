<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Race extends Model
{
    protected $fillable = [];

    public function submissions(): HasMany {
        return $this->hasMany('RaceSubmission', 'race_id');
    }
}
