<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SessionTiming extends Model
{
    protected $table = 'session_timing';

    protected $fillable = [
        'leaderboard_line_id',
        'last_lap',
        'best_lap',
        'total_time',
        'lap_count',
        'last_split_id',
        'best_split1',
        'best_split2',
        'best_split3',
    ];

    public function sessionLeaderboardLine()
    {
        return $this->belongsTo(SessionLeaderboardLine::class, 'leaderboard_line_id');
    }
}
