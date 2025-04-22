<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SessionResult extends Model
{
    protected $fillable = [
        'track_name',
        'session_date',
        'meta_data',
        'server_name',
        'session_type',
    ];

    public function leaderboardLines()
    {
        return $this->hasMany(SessionLeaderboardLine::class);
    }
}