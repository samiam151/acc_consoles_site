<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SessionDriver extends Model
{
    protected $fillable = [
        'leaderboard_line_id',
        'first_name',
        'last_name',
        'short_name',
        'player_id',
        'is_current_driver',
    ];

    public function sessionLeaderboardLine()
    {
        return $this->belongsTo(SessionLeaderboardLine::class);
    }
}