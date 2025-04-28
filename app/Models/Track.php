<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Track extends Model
{
    protected $table = 'tracks';
    public $incrementing = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'track_name',
        'track_slug',
        'track_country',
        'track_country_code',
        'track_image',
        'track_dlc',
    ];

    public function races(): HasMany {
        return $this->hasMany(Race::class);
    }
}
