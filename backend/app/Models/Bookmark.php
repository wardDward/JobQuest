<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsToMany(User::class, 'bookmark_users','user_id', 'job_post_id');
    }
}
