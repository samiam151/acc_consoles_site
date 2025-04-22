<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('session_drivers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('leaderboard_line_id');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('short_name')->nullable();
            $table->string('player_id')->nullable();
            $table->boolean('is_current_driver')->default(false);
            $table->timestamps();

            $table->foreign('leaderboard_line_id')
                  ->references('id')
                  ->on('session_leaderboard_lines')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('session_drivers');
    }
};