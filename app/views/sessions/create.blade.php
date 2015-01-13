@extends('layouts/appmain');

@section('content')
    @if (Session::has('flash_notification.message'))
        <div class="alert alert-{{ Session::get('flash_notification.level') }}">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

            {{ Session::get('flash_notification.message') }}
        </div>
    @endif

<h3>
    {{ Auth::check() ? "Welcome back, " . Auth::user()->username : "Please log in!" }}
</h3>

{{ Form::open( ['route' => 'sessions.store'] ) }}

<!-- Email Input -->
<div class="form-group">
    {{ Form::label( 'email', 'Email:') }}
    {{ Form::text( 'email', null, array('class' => 'form-control')) }}
</div>

<!-- Password Input -->
<div class="form-group">
    {{ Form::label( 'password', 'Password:') }}
    {{ Form::password( 'password', array('class' => 'form-control')) }}
</div>

<!-- Submit Button -->
<div class="form-group">
    <div class="col-lg-offset-2 col-lg-10">
        @if (Auth::guest())
        <button type="submit" class="btn btn-primary">LOG IN</button>
        @else
        <a class="btn btn-primary" href="logout">LOG OUT</a>
        @endif
    </div>
</div>

{{ Form::close() }}
@stop