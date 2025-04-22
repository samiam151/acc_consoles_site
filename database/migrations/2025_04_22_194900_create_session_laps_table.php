<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('session_laps', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('session_id');
            $table->unsignedInteger('car_id')->nullable();
            $table->unsignedInteger('driver_index')->nullable();
            $table->unsignedBigInteger('lap_time')->nullable();
            $table->boolean('is_valid_for_best')->default(false);
            $table->unsignedInteger('split1')->nullable();
            $table->unsignedInteger('split2')->nullable();
            $table->unsignedInteger('split3')->nullable();
            $table->timestamps();

            $table->foreign('session_id')
                ->references('id')
                ->on('session_results')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('session_laps');
    }
};
