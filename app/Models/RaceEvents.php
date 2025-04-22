<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RaceEvents extends Model
{
    protected $table = 'race_events';

    protected $fillable = [
        'race_id',
        'track_id',
        'preRaceWaitingTimeSeconds',
        'sessionOverTimeSeconds',
        'ambientTemp',
        'cloudLevel',
        'rain',
        'weatherRandomness',
        'configVersion'
    ];

    public function sessions(): HasMany {
        return $this->hasMany(RaceSessions::class);
    }

    public function track(): HasOne {
        return $this->hasOne(Track::class, 'track_id');
    }

    public function race(): BelongsTo {
        return $this->belongsTo(Race::class, 'race_id');
    }
}
