<?php

namespace App\Http\Requests;

use App\Models\Race;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RaceFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'serverName' => 'required|unique:races,serverName',
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
        ];
    }
}
