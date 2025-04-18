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
        Schema::create('races', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

        });

        Schema::create('race_submissions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger('race_id')->unsigned()->index();
            $table->foreign("race_id")->references("id")->on("races")->onDelete("cascade");

            $table->unsignedBigInteger('user_id')->unsigned()->index();
            $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('races');
        Schema::dropIfExists('race_submissions');
    }
};
