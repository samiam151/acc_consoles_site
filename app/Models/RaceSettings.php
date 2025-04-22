<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RaceSettings extends Model
{
    public $table = 'race_settings';

    public $fillable = [
        'serverName',
        'adminPassword',
        'carGroup',
        'trackMedalsRequirement',
        "safetyRatingRequirement",
        "racecraftRatingRequirement",
        "password",
        "spectatorPassword",
        "maxCarSlots",
        "dumpLeaderboards",
        "isRaceLocked",
        "randomizeTrackWhenEmpty",
        "centralEntryListPath",
        "allowAutoDQ",
        "shortFormationLap",
        "dumpEntryList",
        "formationLapType",
    ];

    public function race(): HasOne {
        return $this->hasOne(Race::class, 'race_id');
    }
}
