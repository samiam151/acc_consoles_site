<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RaceAssistRules extends Model
{
    protected $table = 'race_assist_rules';

    protected $fillable = [
        'race_id',
        'stabilityControlLevelMax',
        'disableAutosteer',
        'disableAutoLights',
        'disableAutoWiper',
        'disableAutoEngineStart',
        'disableAutoPitLimiter',
        'disableAutoGear',
        'disableAutoClutch',
        'disableIdealLine'
    ];

    public function race(): BelongsTo {
        return $this->belongsTo(Race::class, 'race_id');
    }
}
