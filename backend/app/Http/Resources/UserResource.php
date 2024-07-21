<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'created_at' => $this->created_at,
            'description' => $this->description,
            'additional_info' => [
                'company_name' => $this->additionalInfo->company_name,
                'company_logo' => $this->additionalInfo->company_logo,
                'description' => $this->additionalInfo->description,
                'location' => $this->additionalInfo->location,
            ]
        ];
    }
}
