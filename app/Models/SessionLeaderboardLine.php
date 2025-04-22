<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SessionLeaderboardLine extends Model
{
    protected $fillable = [
        'session_result_id',
        'car_id',
        'race_number',
        'car_model',
        'car_group',
        'team_name',
        'current_driver_index',
        'missing_mandatory_pitstop',
        'b_is_spectator',
    ];

    public function sessionResult()
    {
        return $this->belongsTo(SessionResult::class);
    }

    public function sessionDrivers()
    {
        return $this->hasMany(SessionDriver::class, 'leaderboard_line_id');
    }

}