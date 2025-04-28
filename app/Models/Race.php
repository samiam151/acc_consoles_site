<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Race extends Model
{
    protected $fillable = [
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
        "qualifyStandingType",
        "pitWindowLengthSec",
        "driverStintTimeSec",
        "mandatoryPitstopCount",
        "maxTotalDrivingTime",
        "maxDriversCount",
        "isRefuellingAllowedInRace",
        "isRefuellingTimeFixed",
        "isMandatoryPitstopRefuellingRequired",
        "isMandatoryPitstopTyreChangeRequired",
        "isMandatoryPitstopSwapDriverRequired",
        "tyreSetCount",
        "udpPort",
        "tcpPort",
        "maxConnections",
        "lanDiscovery",
        "registerToLobby",
        "configVersion",
        "stabilityControlLevelMax",
        "disableAutosteer",
        "disableAutoLights",
        "disableAutoWiper",
        "disableAutoEngineStart",
        "disableAutoPitLimiter",
        "disableAutoGear",
        "disableAutoClutch",
        "disableIdealLine",
        "preRaceWaitingTimeSeconds",
        "sessionOverTimeSeconds",
        "ambientTemp",
        "cloudLevel",
        "rain",
        "weatherRandomness",

        'track_id'
    ];

    public function submissions(): HasMany {
        return $this->hasMany(RaceSubmission::class);
    }

    public function sessions(): HasMany {
        return $this->hasMany(RaceSessions::class);
    }

    public function track(): BelongsTo {
        return $this->belongsTo(Track::class);
    }
}
