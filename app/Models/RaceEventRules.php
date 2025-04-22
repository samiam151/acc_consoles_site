<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RaceEventRules extends Model
{
    protected $table = 'race_event_rules';

    protected $fillable = [
        "qualifyStandingType",
        "pitWidowLengthSec",
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
    ];

    public function race(): BelongsTo {
        return $this->belongsTo(Race::class, 'race_id');
    }
}
