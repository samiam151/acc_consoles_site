<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('session_leaderboard_lines', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('session_result_id');
            $table->integer('car_id')->nullable();
            $table->integer('race_number')->nullable();
            $table->integer('car_model')->nullable();
            $table->string('car_group')->nullable();
            $table->string('team_name')->nullable();
            $table->integer('current_driver_index')->nullable();
            $table->integer('missing_mandatory_pitstop')->nullable();
            $table->boolean('b_is_spectator')->default(false);
            $table->timestamps();

            $table->foreign('session_result_id')->references('id')->on('session_results')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('session_leaderboard_lines');
    }
};
