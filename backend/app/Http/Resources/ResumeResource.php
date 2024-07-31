<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResumeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'contact' => $this->contact,
            'biography' => $this->biography,
            'skills' => $this->skills,
            'additional' => $this->additional,
            'educational_attainment' => $this->educational_attainment,
            'work_experience' => $this->work_experience,
            'awards' => $this->awards,
            'user' => new UserResource($this->whenLoaded('user')),
            'created_at' => $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
