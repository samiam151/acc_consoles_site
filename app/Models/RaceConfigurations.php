<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RaceConfigurations extends Model
{
    protected $table = 'race_configurations';
    protected $fillable = [
        'race_id',
        'udpPort',
        'tcpPort',
        'maxConnections',
        'lanDiscovery',
        'registerLobby',
        'configVersion'
    ];

    public function race(): BelongsTo {
        return $this->belongsTo(Race::class, 'race_id');
    }
}
