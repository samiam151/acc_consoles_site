<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SessionLap extends Model
{
    protected $table = 'session_laps';

    protected $fillable = [
        'session_id',
        'car_id',
        'driver_index',
        'lap_time',
        'is_valid_for_best',
        'split1',
        'split2',
        'split3',
    ];

    public function sessionResult()
    {
        return $this->belongsTo(SessionResult::class, 'session_id');
    }
}