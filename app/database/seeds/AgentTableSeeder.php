<?php

class AgentTableSeeder extends Seeder {

  public function run()
  {
    Agents::create([
      'agency_id' => 1,
      'agent' => 'Katniss Everdeen',
      'agent_phone' => '8001239876',
      'agent_email' => 'katniss@statefarm.org'
    ]);

    Agents::create([
      'agency_id' => 1,
      'agent' => 'Peeta Mallark',
      'agent_phone' => '8001239878',
      'agent_email' => 'peeta@statefarm.org'
    ]);

    Agents::create([
      'agency_id' => 2,
      'agent' => 'Bilbo Baggins',
      'agent_phone' => '7001239876',
      'agent_email' => 'bbaggins@nationwide.org'
    ]);

    Agents::create([
      'agency_id' => 2,
      'agent' => 'Frodo Baggins',
      'agent_phone' => '7001239878',
      'agent_email' => 'fbaggins@nationwide.org'
    ]);

    Agents::create([
      'agency_id' => 2,
      'agent' => 'Samwise Gangee',
      'agent_phone' => '7001239877',
      'agent_email' => 'sgangee@nationwide.org'
    ]);
  }

}
