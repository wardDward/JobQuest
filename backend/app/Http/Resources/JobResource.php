<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class JobResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $userId = Auth::id();

        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'title' => $this->title,
            'starting_salary' => $this->starting_salary,
            'to_salary' => $this->to_salary,
            'description' => $this->description,
            'position' => $this->position,
            'employement' => $this->employement,
            'location' => $this->location,
            'author' => new UserResource($this->user),
            'bookmark' => $this->isBookmarkedBy($userId),
            'is_applied' => $this->isApplied($userId),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at
        ];
    }
}
