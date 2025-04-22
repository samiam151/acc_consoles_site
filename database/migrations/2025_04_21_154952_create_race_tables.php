<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('race_settings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('serverName');
            $table->string('adminPassword');
            $table->string('carGroup');
            $table->integer('trackMedalsRequirement');
            $table->integer("safetyRatingRequirement");
            $table->integer("racecraftRatingRequirement");
            $table->string("password");
            $table->string("spectatorPassword");
            $table->integer("maxCarSlots");
            $table->integer("dumpLeaderboards");
            $table->integer("isRaceLocked");
            $table->integer("randomizeTrackWhenEmpty");
            $table->string("centralEntryListPath");
            $table->integer("allowAutoDQ");
            $table->integer("shortFormationLap");
            $table->integer("dumpEntryList");
            $table->integer("formationLapType");

            $table->unsignedBigInteger('race_id')->unsigned()->index();
            $table->foreign("race_id")->references("id")->on("races")->onDelete("cascade");
        });

        Schema::create('race_event_rules', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("qualifyStandingType");
            $table->integer("pitWidowLengthSec");
            $table->integer("driverStintTimeSec");
            $table->integer("mandatoryPitstopCount");
            $table->integer("maxTotalDrivingTime");
            $table->integer("maxDriversCount");
            $table->boolean("isRefuellingAllowedInRace");
            $table->boolean("isRefuellingTimeFixed");
            $table->boolean("isMandatoryPitstopRefuellingRequired");
            $table->boolean("isMandatoryPitstopTyreChangeRequired");
            $table->boolean("isMandatoryPitstopSwapDriverRequired");
            $table->integer("tyreSetCount");

            $table->unsignedBigInteger('race_id')->unsigned()->index();
            $table->foreign("race_id")->references("id")->on("races")->onDelete("cascade");
        });

        Schema::create('race_configurations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("udpPort");
            $table->integer("tcpPort");
            $table->integer("maxConnections");
            $table->integer("lanDiscovery");
            $table->integer("registerLobby");
            $table->integer("configVersion");

            $table->unsignedBigInteger('race_id')->unsigned()->index();
            $table->foreign("race_id")->references("id")->on("races")->onDelete("cascade");
        });

        Schema::create('race_assist_rules', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("stabilityControlLevelMax");
            $table->integer("disableAutosteer");
            $table->integer("disableAutoLights");
            $table->integer("disableAutoWiper");
            $table->integer("disableAutoEngineStart");
            $table->integer("disableAutoPitLimiter");
            $table->integer("disableAutoGear");
            $table->integer("disableAutoClutch");
            $table->integer("disableIdealLine");

            $table->unsignedBigInteger('race_id')->unsigned()->index();
            $table->foreign("race_id")->references("id")->on("races")->onDelete("cascade");
        });

        Schema::create('race_events', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('track_id')->unsigned()->index();
            $table->foreign("track_id")->references("id")->on("tracks")->onDelete("cascade");
            $table->integer("preRaceWaitingTimeSeconds");
            $table->integer("sessionOverTimeSeconds");
            $table->integer("ambientTemp");
            $table->integer("cloudLevel");
            $table->integer("rain");
            $table->integer("weatherRandomness");
            $table->integer("configVersion");

            $table->unsignedBigInteger('race_id')->unsigned()->index();
            $table->foreign("race_id")->references("id")->on("races")->onDelete("cascade");
        });

        Schema::create('race_sessions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("hourOfDay");
            $table->integer("dayOfWeekend");
            $table->integer("timeMultiplier");
            $table->string("sessionType");
            $table->integer("sessionDurationMinutes");

            $table->unsignedBigInteger('race_event_id')->unsigned()->index();
            $table->foreign("race_event_id")->references("id")->on("race_events")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('race_settings');
        Schema::dropIfExists('race_event_rules');
        Schema::dropIfExists('race_configurations');
        Schema::dropIfExists('race_assist_rules');
        Schema::dropIfExists('race_sessions');
        Schema::dropIfExists('race_events');
    }
};
