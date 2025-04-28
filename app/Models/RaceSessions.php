<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RaceSessions extends Model
{
    protected $table = 'race_sessions';

    protected $fillable = [
        'hourOfDay',
        'dayOfWeekend',
        'timeMultiplier',
        'sessionType',
        'sessionDurationMinutes',
        'race_id'
    ];

    public function races(): BelongsTo {
        return $this->belongsTo(Race::class);
    }
}
