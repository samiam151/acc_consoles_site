<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
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
        'race_event_id'
    ];

    public function race_event(): HasOne {
        return $this->hasOne(RaceEvents::class, 'race_event_id',);
    }
}
