<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Race extends Model
{
    protected $fillable = [];

    public function submissions(): HasMany {
        return $this->hasMany('RaceSubmission', 'race_id');
    }

    public function race_assist_rule(): HasOne {
        return $this->hasOne(RaceAssistRules::class, 'race_id');
    }

    public function race_configuration(): HasOne {
        return $this->hasOne(RaceConfigurations::class, 'race_id');
    }

    public function race_event_rule(): HasOne {
        return $this->hasOne(RaceEventRules::class, 'race_id');
    }

    public function race_event(): HasOne {
        return $this->hasOne(RaceEvents::class, 'race_id');
    }

    public function race_setting(): HasOne {
        return $this->hasOne(RaceSettings::class, 'race_id');
    }
}
