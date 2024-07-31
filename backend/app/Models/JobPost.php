<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobPost extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'position',
        'location',
        'starting_salary',
        'to_salary'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bookmarks(){
        return $this->belongsToMany(User::class, 'bookmark_users', 'job_post_id', 'user_id');
    }

    public function isBookmarkedBy($userId)
    {
        return $this->bookmarks()->where('bookmark_users.user_id', $userId)->exists();
    }

    public function applied(){
        return $this->belongsToMany(User::class, 'resume_users', 'job_post_id', 'user_id');
    }

    public function isApplied($userId){
        return $this->applied()->where('resume_users.user_id', $userId)->exists();
    }
}
