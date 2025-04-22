<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('session_timing', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('leaderboard_line_id');
            $table->unsignedInteger('last_lap')->nullable();
            $table->unsignedInteger('best_lap')->nullable();
            $table->unsignedBigInteger('total_time')->nullable();
            $table->unsignedInteger('lap_count')->nullable();
            $table->unsignedBigInteger('last_split_id')->nullable();
            $table->unsignedInteger('best_split1')->nullable();
            $table->unsignedInteger('best_split2')->nullable();
            $table->unsignedInteger('best_split3')->nullable();
            $table->timestamps();

            $table->foreign('leaderboard_line_id')
                ->references('id')
                ->on('session_leaderboard_lines')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('session_timing');
    }
};
