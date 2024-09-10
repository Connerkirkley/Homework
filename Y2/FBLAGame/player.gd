extends CharacterBody3D


const SPEED = 5.0
const JUMP_VELOCITY = 6.0
var mouseSense := 0.001
var mouseTwist := 0.0
var pitchTwist := 0.0

func _ready() -> void:
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)
@onready var twist = $twistPivot
@onready var pitch = $twistPivot/pitch

func _process(delta: float) -> void:
	
	"""rotates camera"""
	
	twist.rotate_y(mouseTwist)
	pitch.rotate_x(pitchTwist)
	
	"""restricts camera movement"""
	
	pitch.rotation.x = clamp(pitch.rotation.x,-0.5,0.5)
	
	"""dbug mouse input"""
	
	if Input.is_action_just_pressed("ui_cancel"):
		if Input
		Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)
	mouseTwist = 0
	pitchTwist = 0



func _unhandled_input(event: InputEvent) -> void:
	if event is InputEventMouseMotion:
		if Input.get_mouse_mode() == Input.MOUSE_MODE_CAPTURED:
			mouseTwist = - event.relative.x * mouseSense
			pitchTwist = - event.relative.y * mouseSense




func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	var direction := (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)

	move_and_slide()
